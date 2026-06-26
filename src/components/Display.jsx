function Display({ value }) {
  return (
    <div className="bg-slate-700 rounded-2xl p-5 mb-6">
      <input
        type="text"
        value={value}
        readOnly
        className="w-full bg-transparent text-right text-5xl text-white outline-none"
      />
    </div>
  );
}

export default Display;