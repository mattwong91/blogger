import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {

  async getBlogs() {
    const response = await api.get('api/blogs')
    logger.log('got blogs!:', response.data)
    AppState.blogs = response.data.map(obj => new Blog(obj))
  }

  async createBlog(blogData) {
    const response = await api.post('api/blogs', blogData)
    logger.log('created post!', response.data)
    const newBlog = new Blog(response.data)
    AppState.blogs.push(newBlog)
  }
}

export const blogsService = new BlogsService()