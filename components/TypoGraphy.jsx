function TypoGraphy(props) {
  const { className, children, ...rest } = props
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

function Heading(props) {
  const { className, children } = props
  return <h1 className={className}>{children}</h1>
}

function Paragraph(props) {
  const { className, children } = props
  return <p className={className}>{children}</p>
}

export { TypoGraphy, Heading, Paragraph }
