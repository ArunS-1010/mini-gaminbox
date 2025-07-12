import Card from '../../../common-components/card/Card'
import Nav from '../../nav/Nav'

const Home = () => {
  return (
    <>
      <Nav isSearch="true" />
      {/* <div className="px-5  pt-4">All Games | Favourites</div> */}
      <div className="p-5 d-flex flex-wrap gap-5 justify-content-center">
        <Card
          title="Rock Paper Scissors"
          category="Casual"
          pageLink="rock-paper-scissors"
        />{' '}
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </div>
    </>
  )
}

export default Home
