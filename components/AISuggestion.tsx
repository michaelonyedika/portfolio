export default function AISuggestion() {
  return (
    <div className="glass p-7">
      <div className="flex justify-between">
        <h3 className="text-purple-400 font-semibold">AI Suggestion</h3>

        <div className="text-gray-400">Tone: Professional</div>
      </div>

      <p className="text-gray-300 mt-8 leading-8">
        Here's a smarter way to say it:
        <br />
        <br />
        Thank you for your message! We're excited to help and will get back
        shortly.
      </p>

      <button className="mt-8 text-purple-400 hover:text-white">
        Apply Suggestion →
      </button>
    </div>
  );
}
