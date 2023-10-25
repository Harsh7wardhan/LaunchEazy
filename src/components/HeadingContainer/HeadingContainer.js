import React from 'react'
import classes from './HeadingContainer.module.css'

function HeadingContainer() {
    return (
        <section className={classes.Section}>
            <div className={classes.ParentDiv}>
                <p className={classes.TopText}>MARKETPLACE</p>
                <div className={classes.MainTextContainer}>
                    <div className={classes.MainText}>
                        <h3 className={[classes.Skill, classes.Animate1].join(' ')}>Email Templates</h3>
                        <h3 className={[classes.Skill, classes.Animate2].join(' ')}>Email Sequences</h3>
                        <h3 className={[classes.Skill, classes.Animate3].join(' ')}>Marketing Recepies</h3>
                    </div>
                    <div className={classes.MainTextBottom} >by the community, for the community.</div>
                </div>
                <p className={classes.BottomText}>100s of free templates to help you craft the perfect marketing journey.</p>
            </div>
        </section>
    )
}

export default HeadingContainer
