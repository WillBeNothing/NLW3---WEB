import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import landing from './pages/Landing'
import OrphanageMaps from './pages/OrphanagesMap'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={landing}/>
                <Route path="/app" component={OrphanageMaps} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes