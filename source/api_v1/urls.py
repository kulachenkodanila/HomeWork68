from django.urls import path

from api_v1.views import LikesView, LikesCommentView

# from api_v1.views import echo_view

app_name = "api_v1"

urlpatterns = [
    path("likes/<int:pk>/", LikesView.as_view(), name="likes"),
    path("likes_comment/<int:pk>/", LikesCommentView.as_view(), name="likes_comment")
]
