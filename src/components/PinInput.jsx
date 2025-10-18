import React, { useRef, useState } from "react";

const PinInput = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // move to next input if a number was entered
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }

      if (newPin.every((digit) => digit !== "")) {
        console.log("Entered PIN:", newPin.join(""));
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, 4);
    if (/^\d+$/.test(paste)) {
      const newPin = paste.split("");
      setPin(newPin);
      newPin.forEach((_, i) => {
        if (inputRefs.current[i]) inputRefs.current[i].value = newPin[i];
      });
    }
  };

  return (
    
      <div className="flex gap-3" onPaste={handlePaste}>
        {pin.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-full px-4 py-4 pl-11 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
          />
        ))}
      </div>
    
  );
};

export default PinInput;
