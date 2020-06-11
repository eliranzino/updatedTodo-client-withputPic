import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../store';
import { signOutAction } from '../../actions';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './Header.css';

interface HeaderProps {
    isLogged: boolean;
    logout(): void;
}

class _Header extends React.Component<HeaderProps> {
    render() {
        const {logout, isLogged} = this.props;

        if(!isLogged){
            return <Redirect to="/" />
        }
        
        return (
            <header className="header">
                <div style={{flex: 1}}></div>
                {isLogged ? <Button variant="danger" onClick={logout}>LOG OUT</Button> : null}
            </header>
        )
    }
}

const mapStateToProps = (state: State) => ({
    isLogged: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch: any) => ({
    logout: () => dispatch(signOutAction()),
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(_Header);