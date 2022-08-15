from django.db import models

# Create your models here.

class Wetherdata(models.Model):
    
    date = models.DateField(
        verbose_name = '日付'
    )

    prefecture = models.CharField(
        verbose_name = '観測地点',
        max_length=10,
        null = False,
        blank=False
    )

    maxtemp = models.IntegerField(
        verbose_name = '最高気温'
    )

    mintemp = models.IntegerField(
        verbose_name = '最低気温'
    )

    precipitation = models.IntegerField(
        verbose_name = '降水量'
    )

    snowfall = models.IntegerField(
        verbose_name = '積雪量'
    )

    summary = models.CharField(
        verbose_name = '天気概要',
        max_length=15,
        null = False,
        blank=False
    )

    

    def __str__(self):
        return self.prefecture