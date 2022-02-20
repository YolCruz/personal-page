export default function Sudoku() {
  return (
    <div className="w-screen max-w-full h-screen">
      <div className="grid grid-cols-9 p-20">
        <div className="border border-black -mt-px -ml-px text-center">1</div>
        <div className="border border-black -mt-px -ml-px text-center">2</div>
        <div className="border border-black -mt-px -ml-px text-center">3</div>
        <div className="border border-black -mt-px -ml-px text-center">4</div>
        <div className="border border-black -mt-px -ml-px text-center">5</div>
        <div className="border border-black -mt-px -ml-px text-center">6</div>
        <div className="border border-black -mt-px -ml-px text-center">7</div>
        <div className="border border-black -mt-px -ml-px text-center">8</div>
        <div className="border border-black -mt-px -ml-px text-center">9</div>
      </div>
    </div>
  );
}
