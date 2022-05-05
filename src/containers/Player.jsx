import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import { useNavigate, useParams } from 'react-router-dom'
import '../assets/styles/components/Player.scss'
import NotFound from './NotFound'

const Player = props => {
    const navigate = useNavigate()
    const { id } = useParams();
    const hasPlaying = Object.keys(props.playing).length > 0;

    useLayoutEffect(() => {
        props.getVideoSource(id)
    }, [])

  return hasPlaying ? (
    <div className='Player'>
        <video controls autoPlay>
            <source src={props.playing.source} type='video/mp4' />
        </video>
        <div className="Player-back">
            <button type='button' onClick={() => navigate(-1)}>Regresar</button>
        </div>
    </div>
  ) : <NotFound  /> ;
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)