import logo from './logo.svg';
import './App.css';
import {
  Button, UncontrolledCarousel, Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Add <code>src/App.js</code> and save to reload.
        </p>
        <UncontrolledCarousel
          items={[
            {
              altText: 'Slide 1',
              caption: 'Slide 1',
              key: 1,
              src: 'https://picsum.photos/id/123/1200/600'
            },
            {
              altText: 'Slide 2',
              caption: 'Slide 2',
              key: 2,
              src: 'https://picsum.photos/id/456/1200/600'
            },
            {
              altText: 'Slide 3',
              caption: 'Slide 3',
              key: 3,
              src: 'https://picsum.photos/id/678/1200/600'
            }
          ]}
        />
        <Button color="danger">Danger!</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Pagination aria-label="Page navigation example" size="sm">
          <PaginationItem disabled>
            <PaginationLink
              first
              href="#"
            />
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink
              href="#"
              previous
            />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              next
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              last
            />
          </PaginationItem>
        </Pagination>
      </header>
    </div>
  );
}

export default App;
