==============
Django Wheelie
==============

A Django app template for an easy integration between `Wheelie`_ and `Django`_!

.. _Wheelie: https://github.com/palazzem/wheelie
.. _Django: https://www.djangoproject.com/

Requirements
------------

This template uses Wheelie as an assets processor. Because of that, the requirements are the
same of the Wheelie project:

* `Node.js`_ version ``5.0.0+``
* `Gulp`_
* `NPM`_ package manager
* `Bower`_ package manager (optional)

Missing any of the requirements above, means having a not working integration.

.. _Node.js: https://nodejs.org/
.. _NPM: https://www.npmjs.com/
.. _Bower: http://bower.io/
.. _Gulp: http://gulpjs.com/

Generate
--------

Go to your Django project root and launch the generation with:

.. code-block:: bash

    $ python manage.py startapp wheelie --template=https://github.com/palazzem/django-wheelie/archive/master.zip

Go in your application settings and add Wheelie to the ``INSTALLED_APPS`` list:

.. code-block:: python

    # app/settings.py

    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',

        # ... other apps
        'wheelie',
    ]

The Django app has the following structure:

.. code-block:: bash

    .
    ├── client
    │   ├── js
    │   └── scss
    ├── gulpfile.js
    ├── __init__.py
    ├── package.json
    ├── README.rst
    └── static

The ``README.rst`` file that you're reading, could be safely removed.

Usage
-----

Go into the ``wheelie/`` folder and run the following command to install all project dependencies:

.. code-block:: bash

    $ npm install

After that, you can launch Gulp build via Wheelie using:

.. code-block:: bash

    $ gulp

Django statics
~~~~~~~~~~~~~~

Gulp provides an automatic JavaScript concatenation among all files available in the ``wheelie/client/js/`` folder.
You will also have an automatic compiled SASS for files present in the ``wheelie/client/scss/`` folder.

Gulp outputs the processed files in the ``wheelie/static/`` folder so that Django can serve the folder in development mode.
The Django ``collectstatic`` will target this folder during the process.

Building for production
-----------------------

When you're app is ready, launch Wheelie in production mode using:

.. code-block:: bash

    $ gulp build --production

JavaScript and CSS outputs are minified without any sourcemap. At this time you should commit the content available in
``wheelie/static/`` folder.

License
-------

Copyright (c) 2015, Emanuele Palazzetti and contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those
of the authors and should not be interpreted as representing official policies,
either expressed or implied, of the FreeBSD Project.
