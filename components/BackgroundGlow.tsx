export default function BackgroundGlow() {
  return (
    <>
      {/* <div
        className="
          absolute
          -top-40
          right-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-heroAccent/20
          blur-[160px]
        "
      /> */}

      <div
        className="
          absolute
          bottom-[-250px]
          left-[-150px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-fuchsia-700/20
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(168,85,247,.18),transparent_55%)]
        "
      />
    </>
  );
}
