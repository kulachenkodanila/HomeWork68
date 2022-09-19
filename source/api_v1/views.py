from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.views import View

from webapp.models import Article, Comment


class LikesView(LoginRequiredMixin, View):
    def get(self, request, *args, pk, **kwargs):
        article = Article.objects.get(pk=pk)
        user = self.request.user
        if user in article.likes.all():
            article.likes.remove(user)
        else:
            article.likes.add(user)
        return JsonResponse({"count": article.likes.count()})


class LikesCommentView(LoginRequiredMixin, View):
    def get(self, request, *args, pk, **kwargs):
        comment = Comment.objects.get(pk=pk)
        user = self.request.user
        print(comment)
        print(user)
        if user in comment.article.likes.all():
            comment.article.likes.remove(user)
        else:
            comment.article.likes.add(user)
        return JsonResponse({"count": comment.article.likes.count()})
