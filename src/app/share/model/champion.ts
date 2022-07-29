export interface Champion {
    name: string,
    championId: string,
    cost: number,
    traits: string[],
    ability: {
      skillName: string,
      skillDescription: string,
      abilityType: string[],
      abilityStat:string[]
    },
   
    championStat: {
      heal: string,
      damage: string,
      dps: string,
      amor: string,
      speed: string,
      mana: string,
      mr: string,
      range: string
    }
}
