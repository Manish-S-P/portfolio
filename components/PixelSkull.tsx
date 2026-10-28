// Straw-hat skull sprite. h = yellow hat, r = red band, # = skull colour.
const ART = [
  "..hhhhh..",
  "..rrrrr..",
  "hhhhhhhhh",
  "..#####..",
  ".#######.",
  "##.###.##",
  "#########",
  ".##.#.##.",
  "..#####..",
  "#..#.#..#",
  ".#.....#.",
  "#.......#",
];

const CELLS = ART.flatMap((row, y) =>
  row.split("").flatMap((ch, x) => (ch === "." ? [] : [{ x, y, ch }])),
);

export default function PixelSkull({ px = 5, color = "#1B1512" }: { px?: number; color?: string }) {
  return (
    <svg
      width={9 * px}
      height={12 * px}
      viewBox="0 0 9 12"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className="block"
    >
      {CELLS.map(({ x, y, ch }) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={1}
          height={1}
          fill={ch === "h" ? "#FFD23F" : ch === "r" ? "#C8232C" : color}
        />
      ))}
    </svg>
  );
}
