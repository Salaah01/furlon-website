FROM python:3.8
ENV PYTHONUNBUFFERED 1

RUN apt-get update \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && mkdir -p /app

WORKDIR /app/

# Install the python packages seperately as it is less likely they will need
# updating whereas it is likely the npm packages may be updated in the future.
COPY ./requirements.txt ./requirements.txt
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install && npm audit fix
COPY . .

RUN npx browserslist@latest --update-db
RUN npm run build
