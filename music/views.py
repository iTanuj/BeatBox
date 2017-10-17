from django.shortcuts import render, get_object_or_404
from .models import Album


def index(request):
    albums = Album.objects.all()
    return render(request, 'music/index.html', {'albums': albums})


def detail(request, album_id):
    # album = Album.objects.get(id=album_id)
    album = get_object_or_404(Album, id=album_id)
    return render(request, 'music/detail.html', {'album': album})


def favourite(request, album_id):
    album = get_object_or_404(Album, id=album_id)
    try:
        selected_song = album.song_set.get(id=request.POST['song'])
    except:
        return render(request, 'music/detail.html', {
            'album': album,
            'error_message': 'You did not select a valid song'
        })
    else:
        selected_song.is_favourite = True
        selected_song.save()
        return render(request, 'music/detail.html', {'album': album})