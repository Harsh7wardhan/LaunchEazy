import React from 'react';
import classes from './TemplateCards.module.css';
import CrownImg from '../../assets/Vector.png'

function TemplateCards(props) {

    return (
        <>
            <p className={classes.Heading}>{props.categoryName}</p>

            <div className={classes.CardContainerMobile}>
                <div className={classes.ScrollingContainer}>
                    {props.cards.map((card, index) => (
                        <div key={index} className={classes.Card}>
                            {card.new && (
                                <div className={classes.CrownCont}>
                                    <img className={classes.CrownImg} src={CrownImg} />
                                </div>
                            )}
                            <img className={classes.CardImg} src={card.imgSrc} alt={card.title} />

                            <div className={classes.CardTextDiv}>
                                <p className={classes.CardText}>{card.text}</p>
                            </div>

                            <div className={classes.CardActionsContainer}>
                                <button className={classes.Button}>Use this</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* <div className={classes.CardContainer}>
                {props.cards.map((card, index) => (
                    <div key={index} className={classes.Card}>
                        {card.new && (
                            <div className={classes.CrownCont}>
                                <img className={classes.CrownImg} src={CrownImg} />
                            </div>
                        )}
                        <img className={classes.CardImg} src={card.imgSrc} alt={card.title} />
                        <div className={classes.CardTextDiv}>
                            <p className={classes.CardText}>{card.text}</p>
                            <button className={classes.Button}>Use this</button>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className={classes.CardContainer}>
                {props.cards.map((card, index) => (
                    <div key={index} className={classes.Card}>
                        {card.new && (
                            <div className={classes.CrownCont}>
                                <img className={classes.CrownImg} src={CrownImg} />
                            </div>
                        )}
                        <img className={classes.CardImg} src={card.imgSrc} alt={card.title} />
                        <div className={classes.CardTextDiv}>
                            <p className={classes.CardText}>{card.text}</p>
                        </div>
                        <div className={classes.CardActionsContainer}>
                            <button className={classes.Button}>Use this</button>
                        </div>
                    </div>
                ))}
            </div>

        </>

    );
}

export default TemplateCards;
