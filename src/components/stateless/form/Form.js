import React from 'react'
import Button from '../button/Button'
import Fade from 'react-reveal/Fade'

function Form() {
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <Fade right cascade>
                <form>
                    <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <Button type="submit" typeBtn="btn-primary">Valider</Button>
                    </div>
                </form>
            </Fade>
        </div>
    )
}

export default Form
