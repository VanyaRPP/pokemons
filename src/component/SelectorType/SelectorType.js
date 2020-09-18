import React, { useEffect,useState} from 'react'
import { Button } from 'antd'
import s from './stylePokeTypeSelector.module.css'
import axios from 'axios'

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
	water: '3295F6',
	unknown: '00BBCD',
	shadow: 'B8C0EA'
};

export const SelectorType = ({ ontypeClick, onclearTypeClick }) => {
	const allTyprURL='https://pokeapi.co/api/v2/type'
	const [Type, setType] = useState([])
	
	useEffect(() => {
		axios.get(allTyprURL)
		.then(
			res=>{
				setType(res.data.results)
			}
		)
	}, [allTyprURL])



	return (
			<div>
				<Button
				className={s.Defolt}
				style={{
				color:`violet`
				}}
				onClick={()=>(
					onclearTypeClick()
				)}
				>
					&times;
				</Button>
				{
					Type.map(tName=>(
						<Button
						className={s.Defolt}
						style={{background: `#${TYPE_COLORS[tName.name]}`,color:`violet`}}
						onClick={()=>(
							ontypeClick(tName.url)
						)}
						>
							{tName.name}
						</Button>
					))
				}
			</div>
	)
}
