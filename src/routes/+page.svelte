<script lang="ts">
    import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
    import { Button } from "$lib/components/ui/button/index.js";

    let { data } = $props();
</script>

<main class="prose max-w-3xl m-auto p-2 flex flex-col">
  <h1>Long-form placeholder article</h1>
  <div class="flex flex-wrap items-center gap-2 md:flex-row">
    <Button variant="outline">Button</Button>
    <Button variant="outline" size="icon" aria-label="Submit">
      <ArrowUpIcon />
    </Button>
  </div>

  <h1 class="font-sans">Welcome to SvelteKit</h1>
  <p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
  </p>

  <button
    class="font-mono text-xl transition-all duration-1000 hover:font-semibold p-auto items-center m-auto"
  >
    Hover to bolden smoothly
  </button>

  <a class="inline w-max bg-blue-200" href="/writings">My Writings</a>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
    nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
    tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
    nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
    per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
    lacinia nunc.
  </p>

  <p>
    Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
    Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
    torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales
    ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
    nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed
    convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi
    lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
    quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper
    vel, tincidunt sed, euismod in, nibh.
  </p>

  <p>
    Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora
    torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed
    lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus
    ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti.
    Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.
    Etiam ultrices. Suspendisse in orci enim. Vivamus luctus urna sed urna
    ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec
    diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna
    diam porttitor mauris, quis sollicitudin sapien justo in libero.
  </p>

  <p>
    Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum
    elementum. Donec viverra auctor lobortis. Pellentesque eu est a nulla
    placerat dignissim. Morbi a enim in magna semper bibendum. Etiam
    scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor
    orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc
    gravida congue sed sit amet purus. Quisque lacus quam, egestas ac tincidunt
    a, lacinia vel velit. Aenean facilisis nulla vitae urna tincidunt congue sed
    ut dui. Morbi malesuada nulla nec purus convallis consequat. Vivamus id
    mollis quam. Morbi ac commodo nulla. In condimentum orci id nisl volutpat
    bibendum. Quisque commodo hendrerit lacus. Morbi ipsum dolor, dignissim a
    tellus et, imperdiet tempus dolor.
  </p>

  <p>
    Donec vel nisl in urna pharetra vehicula. Suspendisse potenti. Morbi
    accumsan, odio vel bibendum feugiat, ligula mi consectetur nisl, nec
    tristique sapien nulla et libero. Donec vitae mauris ipsum. Sed sed aliquet
    metus. Vestibulum fermentum libero nec eros fermentum, et dictum mi varius.
    Proin quis volutpat ipsum, sed auctor mi. Nam et condimentum turpis.
    Suspendisse et mi vel nisl varius sodales. Aliquam erat volutpat. Nulla
    facilisi. Integer viverra, quam vel fermentum sodales, nunc augue lacinia
    orci, a aliquam odio sem a enim. Vestibulum ante ipsum primis in faucibus
    orci luctus et ultrices posuere cubilia curae; Vestibulum sodales
    scelerisque nibh, et varius nisi malesuada at. Mauris blandit, nulla et
    vehicula pulvinar, ipsum tellus accumsan dolor, vel convallis sem ipsum et
    turpis.
  </p>

  <p>
    Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu
    vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt
    quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla
    quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
    tristique tempus. Sed interdum magna id leo. Vestibulum pellentesque. Donec
    et nulla at orci fermentum fermentum. Donec egestas fermentum arcu. Nam
    quam. Phasellus a est. Phasellus blandit, odio a accumsan blandit, lacus
    libero fermentum quam, sed molestie tellus odio non tellus. Nullam vel sem.
    Vestibulum aliquam hendrerit sem. Maecenas egestas arcu quis ligula mattis
    placerat. Duis lobortis massa imperdiet quam. Suspendisse erat sem,
    vulputate et, pellentesque nec, posuere sed, metus. Nulla facilisi. Vivamus
    luctus egestas leo. Vestibulum auctor dapibus neque.
  </p>
</main>
