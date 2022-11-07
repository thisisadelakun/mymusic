import React from 'react'
import icon from './ASSETS/icon-music.svg'
import { useState } from 'react'

const Article = () => {
    const [plan, setPlan] = useState({
        year: 'Annual Plan',
        amount: 59.99,
    })

    function handleChange() {
        setPlan({
            year: 'Monthly Plan',
            amount: 4.99
        })
        if (plan.year === 'Annual Plan' && plan.amount === 59.99) {
            setPlan({ year: 'Monthly Plan', amount: 4.99 })
        } else {
            setPlan({ year: 'Annual Plan', amount: 59.99 })
        }
    }
    // function clearOrder() {
    //     setPlan([])

    // }

    return (
        <div className='article'>
            <div className='Plans'>
                <img className='icon' src={icon} alt="" />
                <div className='sub-plan'>
                    <h4>{plan.year}</h4>
                    <p>${plan.amount}/year</p>
                </div>

                <span className='btn' onClick={handleChange}>change</span>
            </div>

            <div className='orders'>
                <button className='btn-again'>Proceed To Payment</button> <br />
                <span className='btn'>Cancel Order</span>
                {/* <a href="">Cancel Order</a>
                <span className='footer' onClick={() => clearOrder([])}>Cancel Order</span> */}
            </div>

        </div>
    )
}

export default Article