import React from 'react'
import {BsArrowRightSquare} from 'react-icons/bs'
import hero from '../images/hero_picture.jpg'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-rose to-timberwolf_light">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="">
                <h2>
                    My name is Paige Rolling.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi ullam harum consequuntur nam fugiat tempore vel neque. Unde provident perferendis cumque non maxime vitae facilis repellat, temporibus obcaecati sit.
                </p>
            </div>
            <div> 
                <button>
                    Portfolio
                    <span>
                        <BsArrowRightSquare />
                    </span>
                </button>
            </div>
            <div>
            <img src={hero} alt="Paige Rolling" className="rounded-2xl md:w-full" />
            </div>
        </div>

    </div>
  )
}

export default Home