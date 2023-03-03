import './ViewPost.css'

export default function ViewPost({ postId }) {

  return (
    <div className='container'>
      <h1 className='post-title m-3 p-3'>Title</h1>
      <hr />
      <div className='post-body m-3'>
        <div className='post-img-div m-3 p-3'>
          <img className='post-img' src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80" alt="" />
        </div>
        <div className='post-content m-3 p-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis urna nec dui faucibus, in mollis urna mollis. Pellentesque pretium ipsum erat, sit amet venenatis velit pretium euismod. Sed et tincidunt massa. Phasellus ac malesuada eros, placerat feugiat felis. Integer felis quam, consectetur in nulla pharetra, suscipit viverra ex. Aenean aliquet nibh eget accumsan ultricies. Vestibulum eget tortor et magna varius placerat. Nullam quis euismod quam. Integer eget quam nec leo pretium vestibulum.

          Quisque faucibus et purus eget luctus. Donec velit sem, finibus a tincidunt quis, sollicitudin eu erat. Vivamus vitae vestibulum dui. Suspendisse blandit elit efficitur condimentum tempor. Phasellus in sem suscipit, semper enim eget, volutpat quam. Fusce iaculis rutrum lacinia. Donec metus sapien, posuere at ligula ut, cursus mollis dui. Vivamus vestibulum vulputate urna nec dapibus.

          Vivamus mattis ex quis augue ullamcorper molestie. Nunc eget est sit amet enim imperdiet convallis. Ut tempor lectus ut sem mollis dignissim. Cras placerat dapibus nulla, sit amet placerat tortor. Sed vel auctor ipsum, non porttitor tortor. Cras ex leo, blandit at lobortis non, egestas at lacus. Mauris non iaculis mi. Donec rutrum, diam sed porttitor rhoncus, felis ipsum interdum ex, et vehicula metus nulla eget dolor. Aenean at fermentum mauris. Fusce tellus eros, consequat vitae pulvinar sed, faucibus non orci. In egestas euismod aliquet. Quisque malesuada quam at massa ultrices ullamcorper.

          Proin sit amet tincidunt nunc. Nulla massa ex, interdum ut interdum et, rutrum ut nunc. Maecenas pharetra in sapien non interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec justo in neque faucibus varius. Curabitur vitae purus mauris. Suspendisse at dui in velit imperdiet accumsan. Nulla mollis purus urna, quis tempus lectus ornare id. Vestibulum dictum ligula nec nulla commodo, a consectetur nunc pretium. Praesent convallis sit amet turpis id ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

          Maecenas mauris mi, aliquet id consequat in, viverra at ipsum. Morbi neque elit, dictum eget ex a, sollicitudin congue eros. Vivamus nec sollicitudin elit. Integer feugiat lectus id ipsum porttitor, at dictum mauris congue. Cras pharetra condimentum dapibus. Aliquam feugiat ipsum vitae viverra fringilla. Vivamus eu magna ex. Nulla facilisi. Donec vehicula id massa in egestas. Integer consequat, tellus vulputate elementum auctor, augue velit consequat sapien, molestie rutrum arcu lacus quis justo. Duis eget mauris urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non dui ante. Etiam eleifend magna in gravida congue. Phasellus a semper dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  )
}