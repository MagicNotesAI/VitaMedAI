## Updating the Testimonials Section

Follow these steps to edit the testimonials and add images.

### 1. Navigate to the Testimonials Component
- Go to the `components` folder.
- Open the **Testimonials** section file.

### 2. Edit the Testimonials
- Update the text in the testimonials as needed.

### 3. Add the Image
- Add the testimonial picture to the `assets` folder.

### 4. Import the Image
Import the image at the top of the component file:

```javascript
import picName from '../assets/picture-name'


run:
git add .
git commit -m "Update testimonials and add images"
git push

run:
npm run deploy

