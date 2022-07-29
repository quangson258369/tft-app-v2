export interface trails{
    key: string,
    name: string,
    description: string,
    type: string,
    sets:set[]
      
}
export interface set{
    style: string,
    min: number,
    max: number,
    description: string
}