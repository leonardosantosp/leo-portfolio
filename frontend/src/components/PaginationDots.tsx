import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'

interface PaginationDotsProps<T> {
  array: T[]
  pageSize: number
  currentPage: number
  onChange: (newPage: number) => void
  color?: string
}

export const PaginationDots = <T,>({
  array,
  pageSize,
  currentPage,
  onChange,
  color
}: PaginationDotsProps<T>) => {
  const totalPages = Math.ceil(array.length / pageSize)

  const buttonStyle = (i: number) => {
    return {
      backgroundColor: i === (color && currentPage) ? color : ''
    }
  }

  return (
    <div className="pagination">
      <div>
        <button
          className="pagination__arrow"
          type="button"
          onClick={() => onChange(Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0}
        >
          <CircleChevronLeft size={20} />
        </button>
        {Array.from({ length: totalPages }).map((_, i) => {
          return (
            <button
              style={buttonStyle(i)}
              className={`pagination__dot ${
                i === currentPage ? 'pagination__dot-active' : ''
              }`}
              type="button"
              key={i}
              onClick={() => onChange(i)}
            >
              {}
            </button>
          )
        })}

        <button
          className="pagination__arrow"
          type="button"
          onClick={() => onChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage + 1 === totalPages}
        >
          <CircleChevronRight size={20} />
        </button>
      </div>
      <div className="pagination__info">{`${
        currentPage + 1
      }  of ${totalPages}`}</div>
    </div>
  )
}
