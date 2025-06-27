import { ref, onMounted } from 'vue'

interface GithubUser {
  login: string
  avatar_url: string
  bio: string | null
  company: string | null
}

interface GithubOrg {
  login: string
}

export function useUserData() {
  const username = ref<string>('')
  const avatarSrc = ref<string>('')
  const desc = ref<string>('')
  const company = ref<string>('')
  const companyName = ref<string>('')

  async function fetchUserData(): Promise<void> {
    const token = import.meta.env.VITE_GITHUB_TOKEN

    try {
      const response = await fetch('https://api.github.com/users/GogaNotClown', {
        headers: { Authorization: `token ${token}` },
      })

      const userData: GithubUser = await response.json()

      username.value = userData.login
      avatarSrc.value =
        userData.avatar_url ||
        'https://i.pinimg.com/736x/d3/3c/c6/d33cc6d3b1ee12c0512a4d5a90fb6382.jpg'
      desc.value = userData.bio || 'There is no bio'
      company.value = userData.company || 'There is no company'

      const orgsResponse = await fetch('https://api.github.com/user/orgs', {
        headers: { Authorization: `token ${token}` },
      })

      const orgsData: GithubOrg[] = await orgsResponse.json()

      if (orgsData.length > 0) {
        const orgData = orgsData[0]
        company.value = `https://github.com/${orgData.login}`
        companyName.value = orgData.login
      } else {
        company.value = 'User is not part of any organization'
        companyName.value = 'User is not part of any organization'
      }
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : String(error)
      console.error('Error fetching user data:', errMsg)
    }
  }

  onMounted(fetchUserData)

  return { username, avatarSrc, desc, company, companyName }
}
