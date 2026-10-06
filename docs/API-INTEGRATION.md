# Contact API Integration

The website works without a backend. In demo mode, submitted enquiries are saved in browser localStorage under:

`smartSolutionsEnquiries`

When an API is available, create a `.env` file in the project root:

```env
VITE_CONTACT_API_URL=https://your-domain.com/api/enquiries
```

The frontend sends a JSON POST request with this shape:

```json
{
  "name": "Rahul Sharma",
  "company": "ABC Manufacturing Pvt. Ltd.",
  "email": "rahul@company.com",
  "phone": "+91 98XXXXXXXX",
  "projectType": "Traceability",
  "location": "Manesar",
  "budget": "₹5–15 Lakh",
  "message": "Need barcode + PLC + dashboard traceability for 6 stations.",
  "preferred": "Email"
}
```

Recommended API response:

```json
{
  "success": true,
  "message": "Enquiry received",
  "referenceId": "SS-ENQ-0001"
}
```

Enable CORS for the frontend origin during development and deployment.
