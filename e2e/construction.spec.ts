import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Building Excellence')
    await expect(page).toHaveTitle(/Ironstone Construction/)
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    // Stats from imported content
    await expect(page.getByText('500+')).toBeVisible()
    await expect(page.getByText('Projects Completed')).toBeVisible()
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /projects/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /services/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /team/i }).first()).toBeVisible()
  })
})

test.describe('Projects Page', () => {
  test('lists projects from Drupal', async ({ page }) => {
    await page.goto('/projects')
    await expect(page.locator('h1')).toContainText('Our Projects')
    await expect(page.getByText('Riverside Plaza')).toBeVisible()
    await expect(page.getByText('Oakwood Estates')).toBeVisible()
  })

  test('project detail page renders', async ({ page }) => {
    await page.goto('/projects/riverside-plaza')
    await expect(page.locator('h1')).toContainText('Riverside Plaza')
  })
})

test.describe('Services Page', () => {
  test('lists services from Drupal', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Our Services')
    await expect(page.getByText('Commercial Construction', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Residential Construction', { exact: true }).first()).toBeVisible()
  })

  test('service detail page renders', async ({ page }) => {
    await page.goto('/services/commercial-construction')
    await expect(page.locator('h1')).toContainText('Commercial Construction')
  })
})

test.describe('Team Page', () => {
  test('lists team members from Drupal', async ({ page }) => {
    await page.goto('/team')
    await expect(page.locator('h1')).toContainText('Our Team')
    await expect(page.getByText('Mike Johnson', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Maria Rodriguez', { exact: true }).first()).toBeVisible()
  })

  test('team member detail page renders', async ({ page }) => {
    await page.goto('/team/mike-johnson')
    await expect(page.locator('h1')).toContainText('Mike Johnson')
  })
})

test.describe('Testimonials Page', () => {
  test('lists testimonials from Drupal', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.locator('h1')).toContainText('Client Testimonials')
    await expect(page.getByText('Outstanding Commercial Project', { exact: true }).first()).toBeVisible()
  })

  test('testimonial detail page renders', async ({ page }) => {
    await page.goto('/testimonials/riverside-plaza-review')
    await expect(page.locator('h1')).toContainText('Outstanding Commercial Project')
  })
})

test.describe('Contact Page', () => {
  test('renders contact form', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Contact Us')
    await expect(page.getByText('Request a Quote')).toBeVisible()
  })
})

test.describe('About Page', () => {
  test('renders about content from Drupal', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Cornerstone Construction')
  })
})

test.describe('Navigation', () => {
  test('navigating from homepage to projects', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /projects/i }).first().click()
    await expect(page).toHaveURL('/projects')
    await expect(page.locator('h1')).toContainText('Our Projects')
  })
})
