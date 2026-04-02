// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredProjectsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_PROJECTS = gql`
  query GetProjects($first: Int = 20) {
    nodeProjects(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProject {
          body { processed summary }
          projectType { ... on TermInterface { id name } }
          location
          yearCompleted
          budget
          image {
            url alt width height
            variations(styles: [LARGE, MEDIUM]) { name url width height }
          }
          featured
        }
      }
    }
  }
`

export const GET_SERVICES = gql`
  query GetServices($first: Int = 20) {
    nodeServices(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeService {
          body { processed }
          serviceArea { ... on TermInterface { id name } }
          image {
            url alt width height
            variations(styles: [LARGE, MEDIUM]) { name url width height }
          }
        }
      }
    }
  }
`

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($first: Int = 20) {
    nodeTeamMembers(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeTeamMember {
          body { processed }
          position
          email
          phone
          photo {
            url alt width height
            variations(styles: [MEDIUM, THUMBNAIL]) { name url width height }
          }
        }
      }
    }
  }
`

export const GET_TESTIMONIALS = gql`
  query GetTestimonials($first: Int = 20) {
    nodeTestimonials(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeTestimonial {
          body { processed }
          clientName
          projectName
          photo {
            url alt width height
            variations(styles: [MEDIUM, THUMBNAIL]) { name url width height }
          }
          rating
        }
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id title body { processed }
          }
          ... on NodeProject {
            id title path
            body { processed }
            projectType { ... on TermInterface { id name } }
            location yearCompleted budget
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
            featured
          }
          ... on NodeService {
            id title path
            body { processed }
            serviceArea { ... on TermInterface { id name } }
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          }
          ... on NodeTeamMember {
            id title path
            body { processed }
            position email phone
            photo { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          }
          ... on NodeTestimonial {
            id title path
            body { processed }
            clientName projectName rating
            photo { url alt width height variations(styles: [MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodeHomepage {
            id title
            heroTitle heroSubtitle
            heroDescription { processed }
            statsItems { ... on ParagraphStatItem { id number label } }
            featuredProjectsTitle
            ctaTitle ctaDescription { processed }
            ctaPrimary ctaSecondary
          }
        }
      }
    }
  }
`
