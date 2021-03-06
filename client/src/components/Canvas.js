import React, { useRef, useEffect } from 'react'
import getWindowDimensions from "../hooks/getWindowDimensions";


const Canvas = ( props ) => {
    const canvasRef = useRef(null)
    const { width, height } = getWindowDimensions()

    class particle {
        constructor(posX, posY, vx, vy) {
            this.x = posX
            this.y = posY
            this.vx = vx
            this.vy = vy
        }

        draw = (ctx) => {
            ctx.fillStyle = 'snow';
            ctx.beginPath();
            ctx.arc(this.x, this.y, 1, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
        }
    }

    const initParticles = () => {
        let collection = []
        for (let i = 0; i < 24; i++) {
            collection.push(
                new particle(
                    Math.floor(Math.random() * width),
                    Math.floor(Math.random() * height),
                    Math.random() * -1 - 0.5,
                    Math.random() + 0.1
                )
            )
        }
        return collection
    }


    const drawParticles = ( ctx, particles ) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        particles.forEach( (particle) => {
            particle.draw(ctx);
            particle.x += particle.vx;
            particle.y += particle.vy;

            if ( !(particle.y < height
                && particle.x < width
                && particle.x > 0 ))
            {
                if (Math.random() > 0.5) {
                    particle.y = 0;
                    particle.x = Math.floor(Math.random() * width)
                } else if (particle.vx >= 0) {
                    particle.y = Math.floor(Math.random() * height)
                    particle.x = 0
                } else {
                    particle.y = Math.floor(Math.random() * height)
                    particle.x = width
                }
            }
        });
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        const particles = initParticles()
        let animationFrameId
        const render = () => {
            drawParticles( context, particles )
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    })

    return <canvas ref={canvasRef} width={width} height={height} {...props}/>
}

export default Canvas
