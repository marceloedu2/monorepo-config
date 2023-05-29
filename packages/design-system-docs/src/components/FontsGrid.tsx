import { fontFamily } from '@ton/style-guide'

export function FontsGrid() {
  return (
    <div className="flex w-full flex-col mt-3">
      <h3 className="text-4xl !font-heading">
        <strong>Heading:</strong> {fontFamily.heading[0]}
      </h3>
      <h3 className="text-2xl !font-default">
        <strong>Default:</strong> {fontFamily.default[0]}
      </h3>
    </div>
  )
}
