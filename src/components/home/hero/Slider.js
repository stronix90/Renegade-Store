import "./slider.css"

const Slider = () => {
    return (
            <section className="slider">
                <div className="slide">
                    <div className="content">
                        <h2>ARMÁ TU PC</h2>
                        <p className="text-center my-2">
                            Contamos con un asistente virtual que te ayuda a obtener la computadora que necesitas al mejor precio
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className="content">
                        <h2>PC GAMER</h2>
                        <p className="text-center my-2">Computadoras optimizadas para correr todos los juegos que necesitas</p>
                    </div>
                </div>
                <div className="slide">
                    <div className="content">
                        <h2>PC GAMER ULTRA</h2>
                        <p className="text-center my-2">Computadoras Premium, con la última tecnologia y experiencia de gaming</p>
                    </div>
                </div>
            </section>
    )
}

export default Slider
