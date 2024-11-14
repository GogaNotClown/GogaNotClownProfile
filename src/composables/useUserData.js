import {onMounted, ref} from 'vue';

export function useUserData() {
    const username = ref('');
    const avatarSrc = ref('');
    const desc = ref('');
    const company = ref('');
    const companyName = ref('');

    async function fetchUserData() {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        try {
            const response = await fetch('https://api.github.com/users/GogaNotClown', {
                headers: {'Authorization': `token ${token}`},
            });
            const userData = await response.json();
            username.value = userData.login;
            avatarSrc.value = userData.avatar_url;
            desc.value = userData.bio || 'There is no bio';
            company.value = userData.company || 'There is no company';

            const orgsResponse = await fetch('https://api.github.com/user/orgs', {
                headers: {'Authorization': `token ${token}`},
            });
            const orgsData = await orgsResponse.json();
            if (orgsData.length > 0) {
                const orgData = orgsData[0];
                company.value = `https://github.com/${orgData.login}`;
                companyName.value = orgData.login;
            } else {
                company.value = 'User is not part of any organization';
                companyName.value = 'User is not part of any organization';
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    onMounted(fetchUserData);

    return {username, avatarSrc, desc, company, companyName};
}