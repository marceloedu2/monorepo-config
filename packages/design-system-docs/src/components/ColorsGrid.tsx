import { colors } from '@ton/style-guide'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, grid]) => (
    <div key={name} className="flex flex-col pb-4">
      <h2 className="text-4xl font-bold">{name}</h2>
      {Object.entries(grid).map(([key, color]) => (
        <div key={`${name}-${key}`} className={`bg-${name}-${key} px-8 py-4`}>
          <div
            className={`flex justify-between font-default text-display-${
              getContrast(color, '#fff') < 3.5 ? '900' : '0'
            }`}
          >
            <strong>
              {name}-{key}
            </strong>
            <span>{color}</span>
          </div>
        </div>
      ))}
    </div>
  ))
}
