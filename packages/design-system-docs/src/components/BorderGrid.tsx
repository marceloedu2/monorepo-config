import { borderRadius } from '@ton/style-guide'

export function BorderGrid() {
  return (
    <div className="flex w-full flex-wrap justify-center item-center gap-4">
      {Object.entries(borderRadius).map(([name, border]) => (
        <div
          key={name}
          className={`flex justify-center item-center bg-display-700 w-96 h-20 rounded-${name}`}
        >
          <p className="">
            <strong>rounded-{name}</strong>: <span>{border}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
