import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Detail.css'
import RadarChart from 'react-svg-radar-chart';
import ModalStart from '../components/Modal/ModalStart'

const DetailPokemon = () => {
    const id = localStorage.getItem('id')

    const [ abilities, setAbilities ]   = useState([])
    const [ form ]                      = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
    const [ moves, setMoves ]           = useState([])
    const [ hideMoves, setHide ]        = useState(true)
    const SMoves         = moves.slice(0, 20)
    const [ sprite, setSprite ]         = useState('')
    const [ weight, setWeight ]         = useState('')
    const [ height, setHeight ]         = useState('')
    const [ type, setType ]             = useState([])
    const [ speed, setSpeed ]           = useState(0)
    const [ sd, setSd ]                 = useState(0)
    const [ sa, setSa ]                 = useState(0)
    const [ def, setDef ]               = useState(0)
    const [ atk, setAtk ]               = useState(0)
    const [ hp, setHp ]                 = useState(0)
    const [ isModalStart, setModalStart]= useState(false)


    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) =>{
                setAbilities(res.data.abilities)
                setSprite(res.data.forms[0])
                setType(res.data.types)
                setHeight(res.data.height)
                setWeight(res.data.weight)
                setMoves(res.data.moves)
                setSpeed(res.data.stats[0].base_stat/100)
                setSd(res.data.stats[1].base_stat/100)
                setSa(res.data.stats[2].base_stat/100)
                setDef(res.data.stats[3].base_stat/100)
                setAtk(res.data.stats[4].base_stat/100)
                setHp(res.data.stats[5].base_stat/100)
    
            })
                
        },[]);

        const closeModal = () => {
            setModalStart(false)
        }
        
    
    return ( 
        <React.Fragment>
            <ModalStart isModal={isModalStart} closeModal={closeModal} sprite={sprite} idPok={id} />
            <div className="columns" >
                <div className="column is-8 is-offset-2">
                    <div className="columns">
                        <div className="column is-4 is-offset-4">
                            <figure className="image pictPok">
                                <img src={form} alt="Placeholder image" />
                            </figure>
                            <img className='pocketball' onClick={() => setModalStart(true)} src={process.env.PUBLIC_URL + '/pocketball.png'}  />
                        </div>
                    </div>
                    
                    <div className="cardDetail" style={{marginBottom:30}} >
                        <div className="columns is-mobile">
                            <div className="column is-4 state" >
                            <RadarChart
                                captions={{
                                    speed : 'Speed',
                                    specialDefense : 'Special Defense',
                                    specialAttack : 'Special Attack',
                                    defense : 'Defense',
                                    attack: 'Attack',
                                    hp: 'Hp'
                                }}
                                data={[
                                {
                                    data: {
                                        speed:speed, 
                                        specialDefense:sd, 
                                        specialAttack:sa, 
                                        defense:def, 
                                        attack:atk, 
                                        hp:hp,
                                    },
                                    meta: { color: '#43c1f0' }
                                },
                                ]}
                                size={200}
                            />
                            </div>
                            <div className="column is-8" style={{marginLeft:20}}>
                                <span style={{fontSize:30}}>{sprite.name}</span><br/>
                                <span>Height : {height}</span><br/>
                                <span>Weight : {weight} lbs</span><br/>
                                <span>Types : </span>
                                {
                                    type.map(data =>(
                                        <span key={data.slot}>{data.type.name}, </span>
                                    ))
                                }
                                <br/><span>Abilities : </span>
                                {
                                    abilities.map(data =>(
                                        <span key={data.ability.name}>{data.ability.name}, </span>
                                    ))
                                }
                                <br/><span>Moves : </span>
                                {
                                    hideMoves ? 
                                    <span>
                                    {
                                        SMoves.map(data =>(
                                            <span style={{display:''}} key={data.move.name}>{data.move.name}, </span>
                                        ))
                                    }
                                    <span className="button tag is-light" onClick={()=>setHide(false)}>...Read more</span>
                                    </span>
                                    :
                                    <span>
                                    {
                                        moves.map(data =>(
                                            <span style={{display:''}} key={data.move.name}>{data.move.name}, </span>
                                        ))
                                    }
                                    <span className="button tag is-light" onClick={()=>setHide(true)}>...Read less</span>
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
     );
}
 
export default DetailPokemon;