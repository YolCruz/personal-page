interface Props {
  sent: string;
  anim: string;
}

export default function SentPromp({sent, anim}: Props) {
  return (
    <div
        className={`fixed inset-0 bg-black z-10 py-16 bg-opacity-50 place-items-center max-w-full ${sent} opacity-0 ${anim}`}
      >
        <div className="w-screen h-fit text-white">
          <h1 className="text-center text-3xl bg-blue-500 py-6 mx-10">
            Message send!
          </h1>
        </div>
      </div>
  )
}