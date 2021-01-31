import React from 'react'
import Button from './Button'
import './Item.css'
import ExpnadMoreIcon from '@material-ui/icons/ExpandMore';
const Item = ({first, title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons}) => {
    return (
        <div className='item' style={{backgroundImage:`url(${backgroundImg})`}}>
            <div className='item-container'> 
                <div className='item-text'>
                    <p>{title}</p>
                    <div className='itemDesc'>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className='item-lowerThird'>
                    <div className='item-buttons'>
                        <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <div className='item-expand'>
                            <ExpnadMoreIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item
