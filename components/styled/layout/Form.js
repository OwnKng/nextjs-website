import styled from "styled-components"

const Form = ({ className, tags, active, setActive }) => {
  return (
    <div className={className}>
      <div className='buttons'>
        <button
          className={active === "Featured" ? "active" : ""}
          style={{
            color: active === "Featured" ? "#00A7E1" : "",
          }}
          onClick={() => setActive("Featured")}
        >
          Featured
        </button>
        {tags
          ? tags.map((tag) => (
              <button
                className={tag === active ? "active" : ""}
                key={tag}
                style={{
                  color: tag === active ? "#00A7E1" : "",
                }}
                onClick={() => setActive(tag)}
              >
                {tag}
              </button>
            ))
          : null}
      </div>
    </div>
  )
}

export default styled(Form)`
  .buttons {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: space-around;
    place-items: center;
    margin-bottom: 0px;
  }

  p {
    margin: 5px;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.colors.paragraph};
  }

  .active::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0px;
    background-color: ${({ theme }) => theme.colors.button};
    visibility: visible;
    transition: all 0.2s ease-in-out;
    width: 100%;
  }

  button {
    position: relative;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    background: none;
    color: ${({ theme }) => theme.colors.paragraph};
    border: none;
    margin: 5px;

    :before {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0px;
      background-color: ${({ theme }) => theme.colors.button};
      visibility: hidden;
      transition: all 0.2s ease-in-out;
    }

    :hover:before {
      visibility: visible;
      width: 100%;
    }
  }

  button:focus {
    outline: none;
  }
`
