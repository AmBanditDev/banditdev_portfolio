import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'projects')

export const getProjectSlugs = () => {
    return fs.readdirSync(projectsDirectory)
}

export const getProjectBySlug = (slug: string) => {
    const fullPath = path.join(projectsDirectory, `${slug}`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return { data, content }
}

export const getAllProjects = async () => {
    const slugs = getProjectSlugs()

    const projects = slugs.map((slug) => {
        const { data } = getProjectBySlug(slug)
        return {
            slug: slug.replace(/\.mdx$/, ''),
            frontMatter: data
        }
    })

    return projects
}