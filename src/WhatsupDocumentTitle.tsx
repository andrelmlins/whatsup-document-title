interface WhatsupDocumentTitleProps extends JSX.IntrinsicAttributes {
  title: string;
}

function WhatsupDocumentTitle({ title, children }: WhatsupDocumentTitleProps) {
  document.title = title;

  return <>{children}</>;
}

export default WhatsupDocumentTitle;
