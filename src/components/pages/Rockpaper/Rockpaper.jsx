import Nav from '../../nav/Nav'

const Rockpaper = () => {
  return (
    <>
      <Nav />
      <div className="p-4 px-5 mx-5 d-flex justify-content-between align-items-center">
        <h5>Rock Paper Scissors</h5>
        <button
          className="btn btn-outline-dark"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>

      <div className="row text-center">
        <div className="col-3 bg-dark">Player</div>
        <div className="col-6 bg-secondary">
          GAME STARTS
          <img
            alt="Rock"
            // src="https://purepng.com/public/uploads/large/purepng.com-stones-and-rocksstonerockmineralmaterialbuilding-1411527102279ymwog.png"
            src="https://github.com/ArunS-1010/mini-gaminbox/blob/main/src/assets/images/purple_play_icon.png?raw=true"
            width={100}
            height={100}
          />
        </div>
        <div className="col-3 bg-dark">CPU</div>
      </div>
    </>
  )
}

export default Rockpaper
