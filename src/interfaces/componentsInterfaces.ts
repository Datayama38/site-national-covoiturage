import  type {  LayersList, PickingInfo } from '@deck.gl/core/typed'

export interface MapInterface{
  title?: string,
  height?: string | number,
  width?: string | number,
  initialView?: any,
  mapStyle?: string, 
}

export interface DeckMapInterface extends MapInterface{
  layers?:  LayersList
  tooltip?: ((info: PickingInfo) => DeckTooltipContent) | null, 
}

export interface DeckTooltipContent{
  html: string,
  className: string,
  style: object,
}