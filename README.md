# Arsalan Furnisher’s website

A responsive, multi-page static site using the supplied forest-green and gold identity. The pages are a home page, carpets and rugs, curtains and blinds, upholstery, and custom orders. Customers can describe a furnishing and prepare a WhatsApp message; they review and send it themselves.

## Preview

Open `index.html` in a browser. No build tools, frameworks, server or paid service are required. The site uses local system fonts and local images.

## Publish with GitHub Pages

1. Create a GitHub repository, such as `arsalan-furnishers-site`.
2. Upload all files and folders in this directory, keeping `index.html` at the repository root.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and `/ (root)`, then save.
5. GitHub will show the Pages address when deployment is ready.

## Add a custom domain later

Enter the domain under **Settings → Pages → Custom domain**, then configure the DNS records shown by GitHub at the domain provider. GitHub can provision HTTPS after DNS is configured.

## Update business details

- Change `WHATSAPP_NUMBER` in `script.js` using international format without `+` or spaces.
- Update the address or page copy in the HTML files.
- Update colours and layouts in `styles.css`.
- Replace images in `assets/`, keeping filenames or updating image paths in the HTML.

The request form does not save information or place an order on its own. It creates a WhatsApp message for the customer to review and send.

The room photographs are generated styling inspiration, not a live catalogue or a promise that a particular design is in stock. The site invites customers to ask about current options and custom sizing.
