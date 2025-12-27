<script>
    let { data } = $props();
</script>

<h1>My Writing</h1>

<ul>
    {#each data.posts as post}
        <li>
            <a href="/writings/{post.slug}">{post.title}</a>
            <span class="text-gray-500">{post.date}</span>
        </li>
    {/each}
</ul>
