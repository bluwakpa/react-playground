import React from 'react'
import GreatGrandChild from './GreatGrandChild'

export default function GrandChild() {
    return (
        <div classname='GrandChild'>
            <GreatGrandChild />
        </div>
    );
}