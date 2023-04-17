import { useEffect, useState } from "react";

export default function PromptForm({
  initialPrompt,
  onSubmit,
  scribbleExists,
}) {
  const [prompt, setPrompt] = useState(initialPrompt);

  const disabled = !(scribbleExists && prompt?.length > 0);

  useEffect(() => {
    setPrompt(initialPrompt);
  }, [initialPrompt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="animate-in fade-in duration-700">
      <div className="flex mt-4">
        <input
          id="prompt-input"
          type="text"
          name="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to create..."
          className="block w-full flex-grow rounded-l-md"
        />

        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white rounded-r-md text-small font-bold inline-block px-5 py-3 flex-none ${
            disabled ? "opacity-20 cursor-not-allowed	" : ""
          }`}
          type="submit"
          disabled={disabled}
        >
          Go
        </button>
      </div>
    </form>
  );
}

// bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded